import { css } from "@emotion/react";
import { RepositoryList } from "./components/RepositoryList";

export const App = () => {
  const wrapperStyle = css`
    display: flex;
    justify-content: center;
  `;
  const contentStyle = css`
    width: 100%;
    max-width: 1024px;
    padding: 15px;
  `;
  return (
    <main css={wrapperStyle}>
      <div css={contentStyle}>
        <h1>Hello World!</h1>

        <RepositoryList />
      </div>
    </main>
  );
};
