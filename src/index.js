import React from 'react';
import '../css/style.css';
class ReactHtmlTable extends React.Component {

  Header(columns) {
    return columns.map((item) =>
      <th key={item.key}>{item.name}</th>
    )
  }

  Body(row, index) {
    return <tr key={'row' + index}>{Object.keys(row).map((item, i) =>
      <td key={'row_' + index + '_column_' + i + '_' + item}>{row[item]}</td>
    )}
    </tr>

  }

  render() {
    return (
      <div>
        <table className="htmlReactTable">
          <thead>
            <tr key="header_row">
              {this.Header(this.props.columns)}
            </tr>
          </thead>
          <tbody>
            {this.props.rows.map((row, index) =>
              this.Body(row, index)
            )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default ReactHtmlTable;