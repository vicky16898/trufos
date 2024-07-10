import React from 'react';
import Icon from './Icon';

export const MoreIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M8.615 17.333c-0.367 0-0.681-0.131-0.942-0.392s-0.392-0.575-0.392-0.942 0.131-0.681 0.392-0.942c0.261-0.261 0.575-0.392 0.942-0.392s0.681 0.131 0.942 0.392c0.261 0.261 0.392 0.575 0.392 0.942s-0.131 0.681-0.392 0.942c-0.261 0.261-0.575 0.392-0.942 0.392zM16 17.333c-0.367 0-0.681-0.131-0.942-0.392s-0.392-0.575-0.392-0.942 0.131-0.681 0.392-0.942c0.261-0.261 0.575-0.392 0.942-0.392s0.681 0.131 0.942 0.392c0.261 0.261 0.392 0.575 0.392 0.942s-0.131 0.681-0.392 0.942c-0.261 0.261-0.575 0.392-0.942 0.392zM23.385 17.333c-0.367 0-0.681-0.131-0.942-0.392s-0.392-0.575-0.392-0.942 0.131-0.681 0.392-0.942c0.261-0.261 0.575-0.392 0.942-0.392s0.681 0.131 0.942 0.392c0.261 0.261 0.392 0.575 0.392 0.942s-0.131 0.681-0.392 0.942c-0.261 0.261-0.575 0.392-0.942 0.392z"></path>
      </Icon>
  );
};

export const AddIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M15.111 16.889h-8.889c-0.252 0-0.463-0.085-0.633-0.256s-0.256-0.382-0.256-0.634c0-0.252 0.085-0.463 0.256-0.633s0.381-0.255 0.633-0.255h8.889v-8.889c0-0.252 0.085-0.463 0.256-0.633s0.382-0.256 0.634-0.256c0.252 0 0.463 0.085 0.633 0.256s0.255 0.381 0.255 0.633v8.889h8.889c0.252 0 0.463 0.085 0.633 0.256s0.256 0.382 0.256 0.634-0.085 0.463-0.256 0.633c-0.17 0.17-0.381 0.255-0.633 0.255h-8.889v8.889c0 0.252-0.085 0.463-0.256 0.633s-0.382 0.256-0.634 0.256-0.463-0.085-0.633-0.256c-0.17-0.17-0.255-0.381-0.255-0.633v-8.889z"></path>
      </Icon>
  );
};

export const ArrowForwardIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M22.546 16.165h-15.258c-0.173 0-0.321-0.058-0.441-0.174s-0.181-0.261-0.181-0.435 0.060-0.321 0.181-0.441c0.121-0.121 0.268-0.181 0.441-0.181h15.258l-7.19-7.19c-0.119-0.119-0.182-0.262-0.189-0.428s0.057-0.318 0.193-0.454c0.127-0.133 0.272-0.199 0.435-0.196s0.311 0.068 0.447 0.196l7.964 7.964c0.105 0.114 0.184 0.228 0.237 0.344s0.079 0.244 0.079 0.385-0.026 0.269-0.079 0.385c-0.053 0.116-0.131 0.226-0.237 0.331l-7.964 7.964c-0.125 0.125-0.271 0.191-0.439 0.2s-0.316-0.058-0.443-0.2c-0.136-0.127-0.204-0.271-0.204-0.43s0.068-0.307 0.204-0.443l7.186-7.199z"></path>
      </Icon>
  );
};

export const BookmarkIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M16.006 23.733l-4.974 2.127c-0.688 0.296-1.338 0.24-1.95-0.168s-0.918-0.982-0.918-1.722v-15.074c0-0.572 0.198-1.056 0.593-1.452s0.88-0.593 1.452-0.593h11.58c0.573 0 1.057 0.198 1.452 0.593s0.593 0.88 0.593 1.452v15.074c0 0.74-0.306 1.314-0.918 1.722s-1.258 0.464-1.937 0.168l-4.974-2.127zM16 22.334l5.451 2.363c0.274 0.12 0.534 0.094 0.782-0.077s0.372-0.402 0.372-0.692v-15.026c0-0.205-0.085-0.393-0.256-0.564s-0.359-0.256-0.564-0.256h-11.569c-0.205 0-0.393 0.085-0.564 0.256s-0.256 0.359-0.256 0.564v15.026c0 0.291 0.124 0.521 0.372 0.692s0.509 0.197 0.782 0.077l5.451-2.363z"></path>
      </Icon>
  );
};

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M16 16.944l-6.995 6.995c-0.125 0.125-0.278 0.192-0.459 0.2s-0.343-0.058-0.484-0.2c-0.142-0.142-0.213-0.299-0.213-0.472s0.071-0.33 0.213-0.472l6.995-6.995-6.995-6.995c-0.125-0.125-0.192-0.278-0.2-0.459s0.058-0.343 0.2-0.484c0.142-0.142 0.299-0.213 0.472-0.213s0.33 0.071 0.472 0.213l6.995 6.995 6.995-6.995c0.125-0.125 0.278-0.192 0.459-0.2s0.343 0.058 0.484 0.2c0.142 0.142 0.213 0.299 0.213 0.472s-0.071 0.33-0.213 0.472l-6.995 6.995 6.995 6.995c0.125 0.125 0.192 0.278 0.2 0.459s-0.058 0.343-0.2 0.484c-0.142 0.142-0.299 0.213-0.472 0.213s-0.33-0.071-0.472-0.213l-6.995-6.995z"></path>
      </Icon>
  );
};

export const DeleteIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M12.039 23.009c-0.479 0-0.889-0.157-1.23-0.472s-0.512-0.693-0.512-1.135v-11.282h-0.241c-0.205 0-0.376-0.064-0.515-0.192s-0.208-0.286-0.208-0.475c0-0.189 0.069-0.347 0.208-0.475s0.31-0.191 0.515-0.191h3.613c0-0.218 0.083-0.403 0.249-0.556s0.367-0.23 0.603-0.23h4.077c0.236 0 0.437 0.077 0.603 0.23s0.249 0.339 0.249 0.556h3.613c0.205 0 0.376 0.064 0.515 0.192s0.208 0.286 0.208 0.475c0 0.189-0.069 0.347-0.208 0.475s-0.31 0.191-0.515 0.191h-0.241v11.282c0 0.442-0.171 0.82-0.512 1.135s-0.751 0.472-1.23 0.472h-9.043zM21.378 10.12h-9.636v11.282c0 0.080 0.028 0.145 0.083 0.197s0.127 0.077 0.213 0.077h9.043c0.086 0 0.157-0.026 0.213-0.077s0.083-0.117 0.083-0.197v-11.282zM14.782 19.897c0.205 0 0.376-0.064 0.515-0.192s0.207-0.286 0.207-0.475v-6.667c0-0.189-0.069-0.347-0.208-0.475s-0.31-0.192-0.515-0.192-0.376 0.064-0.515 0.192c-0.138 0.128-0.208 0.286-0.208 0.475v6.667c0 0.189 0.069 0.347 0.208 0.475s0.31 0.192 0.515 0.192zM18.339 19.897c0.205 0 0.377-0.064 0.515-0.192s0.207-0.286 0.207-0.475v-6.667c0-0.189-0.069-0.347-0.208-0.475s-0.31-0.192-0.515-0.192c-0.205 0-0.377 0.064-0.515 0.192s-0.208 0.286-0.208 0.475v6.667c0 0.189 0.069 0.347 0.208 0.475s0.31 0.192 0.515 0.192z"></path>
      </Icon>
  );
};

export const InfoIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M16.001 22c0.189 0 0.347-0.064 0.475-0.192s0.191-0.286 0.191-0.475v-6c0-0.189-0.064-0.347-0.192-0.475s-0.287-0.192-0.476-0.192c-0.189 0-0.347 0.064-0.475 0.192s-0.191 0.286-0.191 0.475v6c0 0.189 0.064 0.347 0.192 0.475s0.287 0.192 0.476 0.192zM16 12.769c0.232 0 0.427-0.079 0.585-0.236s0.236-0.352 0.236-0.585c0-0.232-0.079-0.427-0.236-0.585s-0.352-0.236-0.585-0.236-0.427 0.079-0.585 0.236c-0.157 0.157-0.236 0.352-0.236 0.585s0.079 0.427 0.236 0.585c0.157 0.157 0.352 0.236 0.585 0.236zM16.004 28c-1.659 0-3.22-0.315-4.68-0.945s-2.731-1.484-3.812-2.564-1.936-2.349-2.566-3.809c-0.63-1.459-0.946-3.019-0.946-4.678s0.315-3.22 0.945-4.68c0.63-1.461 1.484-2.731 2.564-3.812s2.349-1.936 3.809-2.566c1.459-0.63 3.019-0.946 4.678-0.946s3.219 0.315 4.68 0.945c1.461 0.63 2.731 1.484 3.812 2.564s1.936 2.349 2.566 3.809c0.63 1.459 0.946 3.019 0.946 4.678s-0.315 3.219-0.945 4.68c-0.63 1.461-1.484 2.731-2.564 3.812s-2.349 1.936-3.809 2.566c-1.459 0.63-3.019 0.946-4.678 0.946zM16 26.667c2.978 0 5.5-1.033 7.567-3.1s3.1-4.589 3.1-7.567c0-2.978-1.033-5.5-3.1-7.567s-4.589-3.1-7.567-3.1c-2.978 0-5.5 1.033-7.567 3.1s-3.1 4.589-3.1 7.567c0 2.978 1.033 5.5 3.1 7.567s4.589 3.1 7.567 3.1z"></path>
      </Icon>
  );
};

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M12.718 20.308c-2.132 0-3.938-0.741-5.419-2.222s-2.222-3.288-2.222-5.419c0-2.132 0.741-3.938 2.222-5.419s3.288-2.222 5.419-2.222c2.132 0 3.938 0.741 5.419 2.222s2.222 3.288 2.222 5.419c0 0.926-0.164 1.823-0.492 2.69s-0.759 1.608-1.292 2.223l7.877 7.877c0.125 0.125 0.191 0.278 0.2 0.459s-0.058 0.343-0.2 0.485c-0.142 0.142-0.299 0.213-0.472 0.213s-0.33-0.071-0.472-0.213l-7.877-7.877c-0.667 0.567-1.433 1.007-2.3 1.318s-1.738 0.467-2.613 0.467zM12.718 18.974c1.769 0 3.263-0.609 4.481-1.827s1.827-2.711 1.827-4.481c0-1.769-0.609-3.263-1.827-4.481s-2.712-1.827-4.481-1.827-3.263 0.609-4.481 1.827c-1.218 1.218-1.827 2.712-1.827 4.481s0.609 3.263 1.827 4.481c1.218 1.218 2.712 1.827 4.481 1.827z"></path>
      </Icon>
  );
};

export const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M14.613 28c-0.309 0-0.578-0.102-0.806-0.305s-0.37-0.457-0.424-0.762l-0.351-2.79c-0.426-0.128-0.886-0.33-1.381-0.605s-0.916-0.57-1.263-0.884l-2.554 1.097c-0.282 0.125-0.568 0.138-0.859 0.041s-0.515-0.282-0.672-0.554l-1.439-2.477c-0.157-0.272-0.203-0.555-0.138-0.851s0.22-0.539 0.464-0.728l2.228-1.667c-0.039-0.241-0.072-0.489-0.097-0.745s-0.039-0.504-0.039-0.745c0-0.224 0.013-0.459 0.039-0.706s0.058-0.525 0.097-0.835l-2.228-1.667c-0.244-0.19-0.395-0.437-0.451-0.741s-0.006-0.592 0.151-0.864l1.413-2.4c0.157-0.255 0.381-0.435 0.672-0.541s0.577-0.097 0.859 0.028l2.528 1.072c0.398-0.332 0.829-0.631 1.292-0.897s0.913-0.473 1.351-0.618l0.377-2.79c0.055-0.304 0.196-0.558 0.424-0.762s0.497-0.305 0.806-0.305h2.775c0.309 0 0.578 0.102 0.806 0.305s0.37 0.457 0.424 0.762l0.351 2.815c0.511 0.18 0.963 0.386 1.355 0.618s0.796 0.523 1.212 0.872l2.656-1.072c0.282-0.125 0.568-0.134 0.859-0.028s0.515 0.286 0.672 0.541l1.413 2.426c0.157 0.272 0.203 0.556 0.138 0.851s-0.22 0.539-0.464 0.728l-2.331 1.744c0.074 0.275 0.115 0.528 0.123 0.758s0.013 0.457 0.013 0.681c0 0.207-0.009 0.425-0.026 0.655s-0.056 0.508-0.118 0.835l2.254 1.692c0.244 0.19 0.403 0.433 0.477 0.728s0.031 0.58-0.126 0.851l-1.421 2.451c-0.157 0.272-0.385 0.457-0.685 0.554s-0.59 0.084-0.872-0.041l-2.564-1.097c-0.415 0.349-0.833 0.648-1.254 0.897s-0.858 0.447-1.313 0.592l-0.351 2.815c-0.055 0.304-0.196 0.558-0.424 0.762s-0.497 0.305-0.806 0.305h-2.775zM14.667 26.667h2.608l0.492-3.61c0.672-0.178 1.277-0.422 1.814-0.732s1.085-0.735 1.642-1.276l3.326 1.418 1.326-2.267-2.918-2.192c0.111-0.38 0.185-0.729 0.221-1.047s0.054-0.639 0.054-0.96c0-0.338-0.018-0.659-0.054-0.96s-0.11-0.633-0.221-0.996l2.969-2.244-1.326-2.267-3.403 1.426c-0.403-0.443-0.934-0.858-1.591-1.245s-1.279-0.644-1.865-0.77l-0.408-3.61h-2.659l-0.415 3.585c-0.672 0.144-1.289 0.375-1.853 0.694s-1.123 0.757-1.681 1.314l-3.326-1.392-1.326 2.267 2.892 2.159c-0.111 0.299-0.189 0.624-0.233 0.974s-0.067 0.715-0.067 1.092c0 0.339 0.022 0.674 0.067 1.008s0.114 0.658 0.208 0.974l-2.867 2.192 1.326 2.267 3.3-1.4c0.523 0.528 1.066 0.952 1.629 1.271s1.198 0.567 1.904 0.745l0.433 3.585zM15.964 19.333c0.93 0 1.718-0.323 2.364-0.969s0.969-1.434 0.969-2.364-0.323-1.718-0.969-2.364c-0.646-0.646-1.434-0.969-2.364-0.969-0.935 0-1.724 0.323-2.368 0.969s-0.965 1.434-0.965 2.364 0.322 1.718 0.965 2.364c0.644 0.646 1.433 0.969 2.368 0.969z"></path>
      </Icon>
  );
};

export const SwapIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M13.366 16.569c-0.197 0-0.363-0.063-0.496-0.189s-0.2-0.282-0.2-0.469v-5.73l-2.151 2.033c-0.126 0.121-0.283 0.182-0.471 0.182s-0.355-0.063-0.499-0.189c-0.144-0.137-0.216-0.294-0.216-0.471s0.072-0.333 0.216-0.469l3.221-3.044c0.087-0.082 0.179-0.14 0.276-0.174s0.201-0.051 0.312-0.051c0.111 0 0.217 0.017 0.317 0.051s0.193 0.092 0.278 0.173l3.244 3.066c0.138 0.13 0.206 0.282 0.204 0.454s-0.075 0.327-0.219 0.464c-0.144 0.126-0.307 0.191-0.489 0.196s-0.345-0.061-0.489-0.197l-2.143-2.025v5.738c0 0.184-0.067 0.338-0.2 0.463s-0.299 0.187-0.496 0.187zM18.641 24c-0.111 0-0.217-0.017-0.317-0.051s-0.193-0.092-0.278-0.173l-3.244-3.066c-0.138-0.13-0.206-0.282-0.204-0.454s0.075-0.327 0.219-0.464c0.144-0.126 0.307-0.191 0.489-0.195s0.345 0.061 0.489 0.197l2.143 2.025v-5.738c0-0.184 0.067-0.338 0.2-0.463s0.299-0.187 0.496-0.187c0.197 0 0.363 0.063 0.496 0.189s0.2 0.282 0.2 0.469v5.73l2.151-2.033c0.126-0.121 0.283-0.182 0.471-0.182s0.355 0.063 0.499 0.189c0.144 0.137 0.216 0.294 0.216 0.471s-0.072 0.333-0.216 0.469l-3.221 3.044c-0.087 0.082-0.179 0.14-0.276 0.174s-0.201 0.051-0.312 0.051z"></path>
      </Icon>
  );
};

export const SmallArrow: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; }> = (props) => {
  return (
      <Icon {...props}>
        <path d="M11.219 12h9.562c1.188 0 1.783 1.436 0.943 2.276l-4.781 4.781c-0.521 0.521-1.365 0.521-1.886 0l-4.781-4.781c-0.84-0.84-0.245-2.276 0.943-2.276z"></path>
        <path d="M20.781 13.333h-9.562l4.781 4.781 4.781-4.781 0.943 0.943-4.781 4.781c-0.521 0.521-1.365 0.521-1.886 0l-4.781-4.781c-0.84-0.84-0.245-2.276 0.943-2.276h9.562c1.188 0 1.783 1.436 0.943 2.276l-0.943-0.943z"></path>
      </Icon>
  );
};