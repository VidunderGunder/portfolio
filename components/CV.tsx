import { css } from "@emotion/react";
import dynamic from "next/dynamic";
import { Document, Page, pdfjs } from "react-pdf";
import useMeasure from "react-use-measure";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const NextPDF = dynamic(() => import("./NextPDF"), { ssr: false });

export default function CV() {
  const [ref, bounds] = useMeasure();

  return (
    <div
      ref={ref}
      css={css`
        margin: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
      `}
    >
      <Document
        options={{
          standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
        }}
        onItemClick={(item) => console.log(item)}
        className="PDFDocument"
        file="/cv.pdf"
        renderMode="canvas"
      >
        <Page
          //  renderTextLayer
          width={bounds.width}
          className="PDFPage"
          pageNumber={1}
        />
      </Document>
    </div>
  );
}
