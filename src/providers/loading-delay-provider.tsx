import { PropsWithChildren, useEffect, useState } from "react";

const LoadingDelayProvider = ({ children }: PropsWithChildren) => {
  const [isDelayed, setIsDelayed] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(true);
    }, 200);

    return () => {
      clearTimeout(timer);
      setIsDelayed(false);
    };
  }, []);

  if (isDelayed) {
    return children;
  }

  return null;
};

export default LoadingDelayProvider;
