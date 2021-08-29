import {
  Button,
  TextInput,
  Container,
  Text,
  Title,
  Card,
  Overlay,
  Divider,
  theming,
} from '@mantine/core';
import { createUseStyles } from 'react-jss';
import { Box, Composition } from 'atomic-layout';
import { Archive, Layout, Inbox, Search } from '@styled-icons/feather';

import { useQuery } from './gqless';

const useStyles = createUseStyles(
  (theme) => ({
    title: {
      display: 'box',
      boxOrient: 'vertical',
      lineClamp: 3,
      overflow: 'hidden',
    },
    contentContainer: {
      background: theme.colors.gray[0],
      borderLeft: '1px solid' + theme.colors.gray[2],
    },
  }),
  { theming }
);

function MyApp() {
  const classes = useStyles();
  const query = useQuery();

  return (
    <Composition
      areas="sidebar content"
      templateCols="250px 1fr"
      height="100vh"
    >
      {({ Sidebar, Content }) => (
        <>
          <Sidebar>
            <Box padding={12} flex alignItems="center">
              <Inbox size={24} strokeWidth={2} style={{ marginRight: 8 }} />
              Unsorted
            </Box>
            <Box padding={12} flex alignItems="center">
              <Layout size={24} strokeWidth={2} style={{ marginRight: 8 }} />
              Windows
            </Box>
            <Box padding={12} flex alignItems="center">
              <Archive size={24} strokeWidth={2} style={{ marginRight: 8 }} />
              Archive
            </Box>
            <Divider />
          </Sidebar>
          <Content className={classes.contentContainer}>
            <Container size="xl">
              <div>
                {query
                  .groups({
                    where: {
                      id: {
                        _eq: '3cdc1e0a-4b9a-4459-8a44-2ee459f61882',
                      },
                    },
                  })
                  .map((group) => (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                      }}
                    >
                      <Title order={4}>{group?.title}</Title>
                      <TextInput
                        icon={<Search size={24} />}
                        placeholder="Search"
                      />
                      <Box flex justifyContent="space-between">
                        <Box>
                          {group.group_tabs_aggregate().aggregate?.count()} tabs
                        </Box>
                      </Box>
                      <div
                        style={{ display: 'flex', flexWrap: 'wrap', gap: 36 }}
                      >
                        {group.group_tabs().map((groupTab) => (
                          <div style={{ width: 267 }}>
                            <Card shadow="sm" padding="sm">
                              <Text weight={500} className={classes.title}>
                                {groupTab.tab.title}
                              </Text>

                              <Text
                                style={{ marginTop: 5 }}
                                weight={500}
                                size="xs"
                              >
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
                    </div>
                  ))}
              </div>
            </Container>
          </Content>
        </>
      )}
    </Composition>
  );
}

export default MyApp;
