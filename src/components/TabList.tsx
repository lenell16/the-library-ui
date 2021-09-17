import {
  Card,
  Overlay,
  Button,
  Text,
  theming,
  Center,
  Loader,
  Image,
} from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { Box } from 'atomic-layout';
import { useRef, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { order_by, usePaginatedQuery } from '../gqless';
import { tabs_filter } from '../pages/AllTabs';
import * as R from 'ramda';

const useStyles = createUseStyles(
  (theme) => ({
    title: {
      display: 'box',
      boxOrient: 'vertical',
      lineClamp: 3,
      overflow: 'hidden',
    },
  }),
  { theming }
);

type TabListProps = {
  tabsFilter: tabs_filter;
};

export default function TabList({ tabsFilter }: TabListProps) {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);

  const [ref, observer] = useIntersection({
    root: containerRef.current,
    rootMargin: '0px 0px 100% 0px',
    threshold: 0,
  });

  const { data, fetchMore, isLoading, args } = usePaginatedQuery(
    (
      query,
      input: tabs_filter,
      // Core helpers, in this example we are just using `getArrayFields`
      { getArrayFields }
    ) => {
      const tabs = query.tabs(input);

      return {
        tabs: tabs.map(({ id, title, url, created_at, tab_groups }) => ({
          id,
          title,
          url,
          created_at,
          groups: tab_groups({
            order_by: [{ group: { title: order_by.desc } }],
          }).map((tabGroup) => tabGroup.group.title),
        })),
        first: input.offset === 0,
        hasMore: tabs.length === 100,
        endCursor: R.last(tabs)?.created_at,
      };
    },
    {
      initialArgs: tabsFilter,
      merge({ data: { existing, incoming }, uniqBy }) {
        if (existing && !incoming.first) {
          return {
            ...incoming,
            tabs: uniqBy([...existing.tabs, ...incoming.tabs], (v) => v.id),
          };
        }
        return incoming;
      },
    }
  );

  useEffect(() => {
    if (observer?.isIntersecting && data?.hasMore) {
      fetchMore(({ existingArgs }) => ({
        ...existingArgs,
        offset: R.isNil(existingArgs.offset)
          ? existingArgs.offset
          : existingArgs.offset + 100,
      }));
    }
  }, [observer?.isIntersecting, data?.hasMore, fetchMore, tabsFilter]);

  useEffect(() => {
    if (args.offset === 0) {
      fetchMore(tabsFilter);
    }
  }, [fetchMore, tabsFilter, args]);

  return isLoading && args.offset === 0 ? (
    <Center style={{ height: '100vh' }}>
      <Loader />
    </Center>
  ) : (
    <Box
      flex
      flexWrap="wrap"
      style={{
        gap: 16,
        overflowX: 'scroll',
      }}
      ref={containerRef}
    >
      {data?.tabs.map((tab) => (
        <div key={tab.id} style={{ width: '100%' }}>
          <Card shadow="sm" padding="sm">
            <Text weight={500} className={classes.title}>
              {tab.title}
            </Text>
            {tab?.groups?.map((title) => title)}
            <Text
              style={{
                marginTop: 5,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
              weight={500}
              size="xs"
            >
              {tab.url && (
                <>
                  <Image
                    width={16}
                    height={16}
                    src={`https://api.faviconkit.com/${
                      new URL(tab.url).hostname
                    }/144`}
                  />{' '}
                  ({new URL(tab.url).hostname})
                </>
              )}
            </Text>

            <Overlay opacity={0} component="a" href={tab.url} target="_blank" />
          </Card>
        </div>
      ))}
      {data?.hasMore && <Button elementRef={ref}>Test</Button>}
    </Box>
  );
}
