import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Editor } from '@monaco-editor/react';
import { DEFAULT_MONACO_OPTIONS } from '@/components/shared/settings/monaco-settings';
import { HttpHeaders } from 'shim/headers';
import { useRef } from 'react';
import { ResponseStatus } from '@/components/mainWindow/responseStatus/ResponseStatus';

export type OutputTabsProps = {
  headers?: HttpHeaders;
  body?: string;
};

const monacoOptions = {
  ...DEFAULT_MONACO_OPTIONS,
  readOnly: true,
};

/**
 * Get the mime type from the content type.
 * @param contentType The content type to get the mime type from.
 */
function getMimeType(contentType?: string) {
  if (contentType !== undefined) {
    const index = contentType.indexOf(';');
    return (index === -1 ? contentType : contentType.substring(0, index)).trim();
  }
}

/**
 * Get the content type without any encoding from the headers.
 * @param headers The headers to get the content type from.
 */
function getContentType(headers?: HttpHeaders) {
  const value = headers?.['content-type'];
  if (value !== undefined) {
    return Array.isArray(value) ? value[0] : value;
  }
}

export function OutputTabs(props: OutputTabsProps) {
  const { body, headers } = props;
  const mimeType = getMimeType(getContentType(headers));
  console.debug('Using syntax highlighting for mime type', mimeType);

  const tabsRef = useRef(null);

  return (
    <Tabs defaultValue="body" ref={tabsRef}>
      <TabsList className="flex flex-row items-center">
        <TabsTrigger className={'tabs-trigger'} value="body">
          Response Body
        </TabsTrigger>
        <TabsTrigger className={'tabs-trigger'} value="header">
          Headers
        </TabsTrigger>
        <ResponseStatus />
      </TabsList>

      <TabsContent value="body">
        <div className={'p-4 h-full'}>
          <Editor
            value={body}
            language={mimeType}
            theme="vs-dark" /* TODO: apply theme from settings */
            options={monacoOptions}
          />
        </div>
      </TabsContent>

      <TabsContent value="header" className={`max-h-[${tabsRef.current?.offsetHeight - 88}px] p-4`}>
        {!headers ? (
          <div className={'flex items-center justify-center w-full h-full text-center'}>
            <span>Please enter URL address and click Send to get a response</span>
          </div>
        ) : (
          <Table className="table-auto w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-auto">Key</TableHead>
                <TableHead className="w-full">Value</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {headers &&
                Object.keys(headers).map((key) => {
                  const value = headers[key];
                  const valueToDisplay =
                    value !== undefined ? (Array.isArray(value) ? value : [value]) : '';
                  return (
                    <TableRow key={key}>
                      <TableCell className="w-1/3">{key}</TableCell>
                      <TableCell>{(valueToDisplay as string[]).join(', ')}</TableCell>{' '}
                      {/* Full width */}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
      </TabsContent>
    </Tabs>
  );
}
