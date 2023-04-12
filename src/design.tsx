import React from "@wordpress/element";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Spinner,
  TabPanel,
} from "@wordpress/components";

export const Design = () => {
  return (
    <>
      <section>
        <header>
          <h3>Buttons</h3>
        </header>
        <div>
          <p className="description">
            These are buttons available in the newer React-based UI for block
            editing. React is not necessary for rendering the buttons as long as
            the appropriate class names are used.
          </p>
          <Flex justify="start">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="link">Link</Button>
          </Flex>
          <h4>Destructive variants</h4>
          <Flex justify="start">
            <Button variant="primary" isDestructive>
              Destructive Primary
            </Button>
            <Button variant="tertiary" isDestructive>
              Destructive Tertiary
            </Button>
            <Button variant="link" isDestructive>
              Destructive Link
            </Button>
          </Flex>
          <h4>Sizes</h4>
          <Flex justify="start">
            <Button variant="primary">Standard</Button>
            <Button variant="secondary" isSmall>
              Small
            </Button>
          </Flex>
        </div>
      </section>
      <section>
        <header>
          <h3>Spinner</h3>
        </header>
        <Spinner />
      </section>
      <section>
        <header>
          <h3>Card</h3>
        </header>
        <Card>
          <CardHeader>
            <h3 className="title">Card title</h3>
          </CardHeader>
          <CardBody>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              libero cum quam beatae unde placeat sequi debitis officiis
              temporibus deleniti aperiam eos hic, saepe ipsum dolorem doloribus
              voluptas inventore. Ipsa.
            </p>
          </CardBody>
        </Card>
      </section>
      <section>
        <header>
          <h3>Columns</h3>
        </header>
        <div id="col-container">
          <div id="col-left">
            <div className="col-wrap">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione odio eaque iusto! Provident soluta doloremque
                accusantium quo obcaecati recusandae ducimus exercitationem.
                Dignissimos explicabo asperiores placeat velit, quae ipsum
                blanditiis nemo?
              </p>
            </div>
          </div>
          <div id="col-right">
            <div className="col-wrap">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis sequi hic nesciunt distinctio molestias, rerum
                aperiam voluptate nemo quaerat! Unde non dolor facere, facilis
                corrupti mollitia expedita neque sapiente quaerat.
              </p>
            </div>
          </div>
        </div>
        <br className="clear" />
      </section>
      <section>
        <header>
          <h3>Pagination</h3>
        </header>
        <div className="tablenav top">
          <h2 className="screen-reader-text">Pages list navigation</h2>
          <Flex className="tablenav-pages" justify="end">
            <span className="displaying-num">46 items</span>
            <Flex className="pagination-links" expanded={false} gap={1}>
              <span
                className="tablenav-pages-navspan button disabled"
                aria-hidden="true">
                «
              </span>
              <span
                className="tablenav-pages-navspan button disabled"
                aria-hidden="true">
                ‹
              </span>
              <span className="paging-input">
                <label
                  htmlFor="current-page-selector"
                  className="screen-reader-text">
                  Current Page
                </label>
                <input
                  className="current-page"
                  id="current-page-selector"
                  type="text"
                  name="paged"
                  value="1"
                  size={1}
                  aria-describedby="table-paging"
                />
                <span className="tablenav-paging-text">
                  {" "}
                  of <span className="total-pages">3</span>
                </span>
              </span>
              <a className="next-page button" href="#">
                <span className="screen-reader-text">Next page</span>
                <span aria-hidden="true">›</span>
              </a>
              <a className="last-page button" href="#">
                <span className="screen-reader-text">Last page</span>
                <span aria-hidden="true">»</span>
              </a>
            </Flex>
          </Flex>
        </div>
      </section>
      <section>
        <header>
          <h3>Separator</h3>
        </header>
        <hr />
      </section>
      <section>
        <header>
          <h3>Search</h3>
        </header>
        <form>
          <p className="search-box">
            <label className="screen-reader-text" htmlFor="post-search-input">
              Search Items:
            </label>
            <input type="search" id="post-search-input" name="s" value="" />
            <input
              type="submit"
              id="search-submit"
              className="button"
              value="Search Items"
            />
          </p>
          <br className="clear" />
        </form>
      </section>
      <section>
        <header>
          <h3>Tabs</h3>
        </header>
        <TabPanel
          tabs={[
            {
              name: "tab1",
              title: "Tab 1",
            },
            {
              name: "tab2",
              title: "Tab 2",
            },
          ]}>
          {(tab) => <p>{tab.title}</p>}
        </TabPanel>
      </section>
    </>
  );
};
