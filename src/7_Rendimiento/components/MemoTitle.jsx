import { memo } from "react";

 function MemoTitle({ children }) {
  console.log('Renderizando memo Title');
  return <h1>{children}</h1>;
}

export default memo(MemoTitle)