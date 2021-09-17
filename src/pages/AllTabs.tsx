import { Title, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { Search } from '@styled-icons/feather';
import { Composition, Box } from 'atomic-layout';
import { useMemo, useState } from 'react';
// import TabList from '../components/TabList';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';

// const QueryLinkList = graphql`
//   query AppListOfLinksQuery {
//     Link_connection(first: 50) {
//       edges {
//         node {
//           createdAt
//           id
//           incognito
//           title
//           updatedAt
//           url
//         }
//       }
//     }
//   }
// `;
const QueryLinkList = graphql`
  query AppQuery {
    # Link_connection(first: 50) {
    #   edges {
    #     node {
    #       createdAt
    #       id
    #       incognito
    #       title
    #       updatedAt
    #       url
    #     }
    #   }
    # }
  }
`;

export default function AllTabs() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 1000);
  const data = useLazyLoadQuery(QueryLinkList, {});

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

        {/* <Box flex justifyContent="space-between">
          <Box>{query.tabs_aggregate().aggregate?.count()} tabs</Box>
        </Box> */}
        {/* <TabList tabsFilter={tabsFilter} /> */}
      </Composition>
    </div>
  );
}
