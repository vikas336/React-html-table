# html-react-table
[![Twitter](https://img.shields.io/twitter/follow/vikasyadav336.svg?style=social&label=Follow)](https://twitter.com/vikasyadav336)

Simple html table using ReactJs

![alt text](https://raw.githubusercontent.com/gajus/table/HEAD/.README/demo.png)

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
