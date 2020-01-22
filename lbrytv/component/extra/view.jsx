import React from 'react';
import postScribe from 'postscribe';

class Extra extends React.Component<Props> {

  componentDidMount() {
    const { id } = this.props;
    postScribe(
      `#extraDiv${id}`, `<script async type="text/javascript">
         atOptions = {
         'key' : '90d9a2493a143516a4eab852ab0d07fd',
         'format' : 'iframe',
         'height' : 300,
         'width' : 160,
         'params' : {}
       };
        </script>
        <script async type="text/javascript" src="https://www.madcpms.com/90d9a2493a143516a4eab852ab0d07fd/invoke.js"></script>`
    );
  }

  render() {
    const { id } = this.props;
    return (
      <div className="navigation--placeholder-content" id={`extraDiv${id}`} />
    );
  }
};

export default Extra;
