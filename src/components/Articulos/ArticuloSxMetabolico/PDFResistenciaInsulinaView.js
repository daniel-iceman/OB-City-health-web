import React, { useState, useEffect } from 'react';
import '../ArticuloResumen.css'
import { Document, Page, pdfjs } from 'react-pdf';
import samplePDF from './ResistenciaInsulinaNutriterapia.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFResistenciaInsulinaView() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }
  
    useEffect(() => {
      window.scroll(0,0)
    });

    return (
        <>
          <div >
            <Document
              file={samplePDF}
              onLoadSuccess={onDocumentLoadSuccess}
              className='pdf-view'
            >
              <Page pageNumber={pageNumber}  />
            </Document>
          </div>
            <div className='pdf-controls'>
              <p>
                Pag. {pageNumber || (numPages ? 1 : '--')} de {numPages || '--'}
              </p>

              <div className='pdf-btns' >
                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                >
                  Previa
                </button>
                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                >
                  Siguiente
                </button>
            </div>
          </div>
        </>
    )
}

export default PDFResistenciaInsulinaView
