import React from 'react';
import '../css/style.css';
class ReactHtmlTable extends React.Component {

  Header(columns) {
    return columns.map((item) =>
      <th key={item.key}>{item.name}</th>
    )
  }

  Body(row) {
    return <tr> {Object.keys(row).map((item) =>
      <td>{row[item]}</td>
    )}
    </tr>

  }

  render() {
    return (
      <div>
        <p>This is ReactHtmlTable</p>
        <table>
          <thead>
            <tr>
              {this.Header(this.props.columns)}
            </tr>
          </thead>
          <tbody>
            {this.props.rows.map((row) =>
              this.Body(row)
            )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default ReactHtmlTable;