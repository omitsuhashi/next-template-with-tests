import SWRConfig from 'swr/dist/utils/config-context';
import { ReactNode } from 'react';
import fetcher from './axios';
import { SWRConfiguration } from 'swr';

const swrConfig = (children?: ReactNode, config?: SWRConfiguration) => {
  const _config: SWRConfiguration = {
    ...config,
    fetcher,
  };
  return <SWRConfig value={_config}>{children}</SWRConfig>;
};

export default swrConfig;
