import SWRConfig from 'swr/dist/utils/config-context';
import { PropsWithChildren, ReactElement } from 'react';
import fetcher from './axios';
import { SWRConfiguration } from 'swr';
import { render } from '@testing-library/react';

type BBSwrConfigProps = { config?: SWRConfiguration };

const BBSwrConfig = (props: PropsWithChildren<BBSwrConfigProps>) => {
  const _config: SWRConfiguration = {
    ...props.config,
    fetcher,
  };
  return <SWRConfig value={_config}>{props.children}</SWRConfig>;
};

const TestSwrConfig = (props: PropsWithChildren) => {
  return (
    <SWRConfig value={{ dedupingInterval: 0, fetcher: () => new Map() }}>
      {props.children}
    </SWRConfig>
  );
};

export const testRender = (ui: ReactElement) =>
  render(ui, { wrapper: TestSwrConfig });

export default BBSwrConfig;
