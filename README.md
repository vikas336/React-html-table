# html-react-table
[![Twitter](https://img.shields.io/twitter/follow/vikasyadav336.svg?style=social&label=Follow)](https://twitter.com/vikasyadav336)

Simple html table using ReactJs

![alt text](https://raw.githubusercontent.com/vikas336/html-react-table/master/Table.PNG)

# Install
```npm install --save html-react-table```

# Usage
```
import ReactHtmlTable from 'html-react-table';
   
const columns = [{ key: 'id', name: 'ID' }, 
                 { key: 'company', name: 'company' },
                 { key: 'country', name: 'Country' }];
                    
const rows = [{ id: 1, company: 'TCS', country: 'India' }, 
              { id: 2, company: 'Google', country: 'USA' },
              { id: 3, company: 'Spotify', country: 'Sweden' }];

const ReactTable = () => {
return <ReactHtmlTable
columns={columns}
rows={rows}
/>
    }

```
