import { Container, theming } from '@mantine/core';
import { Composition } from 'atomic-layout';
import { createUseStyles } from 'react-jss';
import Navigation from './components/Navigation';
import { useRoute } from './router';
import SingleGroupPage from './pages/SingleGroupPage';
import AllTabs from './pages/AllTabs';
import { Suspense } from 'react';

const useStyles = createUseStyles(
  (theme) => ({
    contentContainer: {
      background: theme.colors.gray[0],
      borderLeft: '1px solid' + theme.colors.gray[2],
    },
  }),
  { theming }
);

function MyApp() {
  const classes = useStyles();
  const router = useRoute();

  return (
    <Composition
      areas="sidebar content"
      templateCols="250px 1fr"
      height="100vh"
    >
      {({ Sidebar, Content }) => (
        <>
          <Sidebar>
            <Navigation />
          </Sidebar>
          <Content className={classes.contentContainer}>
            <Container size="xl">
              <Suspense fallback={'Loading...'}>
                {/* {router.name === 'unsorted' && (
                <SingleGroupPage groupType="unsorted" />
              )}
              {router.name === 'archive' && (
                <SingleGroupPage groupType="archive" />
              )} */}
                {router.name === 'allTabs' && <AllTabs />}
                {router.name === false && 'Not Found'}
              </Suspense>
            </Container>
          </Content>
        </>
      )}
    </Composition>
  );
}

export default MyApp;
