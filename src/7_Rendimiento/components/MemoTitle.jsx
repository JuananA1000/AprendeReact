import { memo } from "react";

 function MemoTitle({ children }) {
  console.log('Renderizando memo Title');
  return <h2>{children}</h2>;
}

export default memo(MemoTitle)