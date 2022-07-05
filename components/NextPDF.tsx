import { ComponentPropsWithoutRef, forwardRef, LegacyRef, Ref } from "react";
import { Document } from "react-pdf/dist/esm/entry.webpack";

const NextPDF = forwardRef(function NextPDF(
  { children, ...props }: ComponentPropsWithoutRef<typeof Document>,
  ref?: Ref<Document>
) {
  return (
    <Document ref={ref} {...props}>
      {children}
    </Document>
  );
});

export default NextPDF;
