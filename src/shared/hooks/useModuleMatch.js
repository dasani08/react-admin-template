import { useSelector } from 'react-redux';

export const useModuleMatch = () => {
  const { location } = useSelector((state) => state.router);
  let pathName = location.pathname;
  pathName = pathName.indexOf('/') !== -1 ? pathName.substring(1) : pathName;
  pathName =
    pathName.lastIndexOf('/') !== -1
      ? pathName.substring(0, pathName.length)
      : pathName;

  return {
    moduleName: pathName.split('/')[0]
  };
};
