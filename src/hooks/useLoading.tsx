import { useEffect, useState } from "react";

interface ILoadingProps {
  delay?: number;
}

const useLoading = ({ delay = 200 }: ILoadingProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeout: any = null;

    if (loading) {
      timeout = setTimeout(() => {
        setShowLoading(true);
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
      setShowLoading(false);
    };
  }, [loading, delay]);

  return [setLoading, showLoading, loading];
};

export default useLoading;
