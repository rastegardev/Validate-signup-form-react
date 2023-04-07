import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | ریباز وب`;
  }, []);
};

export default useTitle;
