import {
  Card,
  Center,
  Loader,
  Overlay,
  Text,
  TextInput,
  theming,
  Title,
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { Search } from '@styled-icons/feather';
import { Box, Composition } from 'atomic-layout';
import { useState, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import {
  Maybe,
  order_by,
  Scalars,
  tab_group_bool_exp,
  tab_group_order_by,
  tab_group_select_column,
  useQuery,
} from '../gqless';

type Props = {
  groupType: string;
};

type groups_tabs_filter = {
  distinct_on?: Maybe<Array<tab_group_select_column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<tab_group_order_by>>;
  where?: Maybe<tab_group_bool_exp>;
};

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

export default function SingleGroupPage(props: Props) {
  const query = useQuery();
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 1000);

  const groupTabsFilter = useMemo(() => {
    const filter: groups_tabs_filter = {
      limit: 100,
      order_by: [
        {
          tab: {
            created_at: order_by.desc,
          },
        },
      ],
    };
    if (debounced !== '') {
      filter.where = {
        tab: {
          _or: [
            { url: { _ilike: `%${debounced}%` } },
            { title: { _ilike: `%${debounced}%` } },
          ],
        },
      };
    }
    return filter;
  }, [debounced]);

  return (
    <div>
      <Composition
        height="100vh"
        templateRows="auto auto auto 1fr"
        templateCols="1fr"
        gap={8}
      >
        <Title order={4}>Unsorted</Title>
        <TextInput
          icon={<Search size={24} />}
          placeholder="Search"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        {query.$state.isLoading ? (
          <Center style={{ height: '100vh' }}>
            <Loader />
          </Center>
        ) : (
          query
            .groups({
              where: {
                type: {
                  _eq: props.groupType,
                },
              },
            })
            .map((group) => (
              <>
                <Box flex justifyContent="space-between">
                  <Box>
                    {group.group_tabs_aggregate().aggregate?.count()} tabs
                  </Box>
                </Box>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 36,
                    overflowX: 'scroll',
                  }}
                >
                  {group.group_tabs(groupTabsFilter).map((groupTab) => (
                    <div style={{ width: 267 }}>
                      <Card shadow="sm" padding="sm">
                        <Text weight={500} className={classes.title}>
                          {groupTab.tab.title}
                        </Text>

                        <Text style={{ marginTop: 5 }} weight={500} size="xs">
                          {groupTab.tab.url &&
                            `(${new URL(groupTab.tab.url).hostname})`}
                        </Text>

                        <Overlay
                          opacity={0}
                          component="a"
                          href={groupTab.tab.url}
                          target="_blank"
                        />
                      </Card>
                    </div>
                  ))}
                </div>
              </>
            ))
        )}
      </Composition>
    </div>
  );
}
