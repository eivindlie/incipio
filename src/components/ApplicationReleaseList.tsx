import { css } from "@emotion/react";
import { useReleases } from "../hooks/useReleases";
import { IApplication } from "../types/configuration";
import { Block } from "./_base/Block";
import { Table } from "./_base/Table";

interface IProps {
  application: IApplication;
}
export const ApplicationReleaseList = ({ application }: IProps) => {
  const releases = useReleases(
    application.repository,
    application.versionPrefix ?? "",
    15
  );

  return (
    <Block>
      <Table>
        <thead>
          <tr>
            <td></td>
            {application.environments.map((env) => (
              <td key={env}>{env}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {releases.map((release) => (
            <tr key={release.tagName}>
              <td>
                <a href={release.url} target="_blank" rel="noopener noreferer">
                  {release.tagName}
                </a>
              </td>
              {application.environments.map((env) => (
                <td key={env}>
                  {release.deployments.find((d) => d.environment === env)
                    ?.state ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Block>
  );
};
