import {
  Title,
  TextInput,
  Card,
  Overlay,
  theming,
  Text,
  Image,
  Button,
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { Search } from '@styled-icons/feather';
import { Composition, Box } from 'atomic-layout';
import { useMemo, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import { AllTabsListQuery } from './__generated__/AllTabsListQuery.graphql';
import { AllTabs_links$key } from './__generated__/AllTabs_links.graphql';
import { createUseStyles } from 'react-jss';
import { LinksPaginationQuery } from './__generated__/LinksPaginationQuery.graphql';

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

export default function AllTabs() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 1000);
  const searchFilter = debounced ? { title: { _ilike: `%${debounced}%` } } : {};
  const query = useLazyLoadQuery<AllTabsListQuery>(
    graphql`
      query AllTabsListQuery($filter: Link_bool_exp) {
        ...AllTabs_links
      }
    `,
    {
      filter: { incognito: { _eq: false }, ...searchFilter },
    }
  );

  const { data, loadNext, hasNext } = usePaginationFragment<
    LinksPaginationQuery,
    AllTabs_links$key
  >(
    graphql`
      fragment AllTabs_links on query_root
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 2 }
      )
      @refetchable(queryName: "LinksPaginationQuery") {
        Link_connection(
          after: $cursor
          first: $count
          order_by: { createdAt: desc }
          where: $filter
        ) @connection(key: "allTabs_Link_connection") {
          edges {
            node {
              id
              incognito
              title
              updatedAt
              url
              createdAt
            }
          }
        }
      }
    `,
    query
  );

  return (
    <div>
      <Composition
        height="100vh"
        templateRows="auto auto auto 1fr"
        templateCols="1fr"
        gap={8}
      >
        <Title order={4}>All Tabs</Title>
        <TextInput
          icon={<Search size={24} />}
          placeholder="Search"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <Box
          flex
          flexWrap="wrap"
          style={{
            gap: 16,
            overflowX: 'scroll',
          }}
        >
          {data.Link_connection.edges.map(({ node: link }) => (
            <div key={link.id} style={{ width: '100%' }}>
              <Card shadow="sm" padding="sm">
                <Text weight={500} className={classes.title}>
                  {link.title}
                </Text>
                {/* {tab?.groups?.map((title) => title)} */}
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
                  {link.url && (
                    <>
                      <Image
                        width={16}
                        height={16}
                        src={`https://api.faviconkit.com/${
                          new URL(link.url).hostname
                        }/144`}
                      />{' '}
                      ({new URL(link.url).hostname})
                    </>
                  )}
                </Text>

                <Overlay
                  opacity={0}
                  component="a"
                  href={link.url}
                  target="_blank"
                />
              </Card>
            </div>
          ))}
          {hasNext && <Button onClick={() => loadNext(2)}>Test</Button>}
        </Box>
      </Composition>
    </div>
  );
}
