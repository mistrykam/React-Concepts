import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./my-context";

function ComponentC() {
  const userContext = useContext(UserContext);
  const channelContext = useContext(ChannelContext);

  return (
    <div style={{ marginLeft: "20px" }}>
      <h3>Component C</h3>
      {/* ---------- Hook Way: useContext --------- */}
      <div>
        <p>
          User logged-in is <i>{userContext.userName}</i>
        </p>
        <p>
          The channel is <i>{channelContext}</i>
        </p>
      </div>
      {/* --------- Old Way ------------ */}
      <UserContext.Consumer>
        {(uContext) => {
          return (
            <div>
              <p>
                User logged-in is <i>{uContext.userName}</i>
              </p>
              <ChannelContext.Consumer>
                {(cContext) => {
                  return (
                    <p>
                      The channel is <i>{cContext}</i>
                    </p>
                  );
                }}
              </ChannelContext.Consumer>
            </div>
          );
        }}
      </UserContext.Consumer>

      <p>{}</p>
    </div>
  );
}

export default ComponentC;
