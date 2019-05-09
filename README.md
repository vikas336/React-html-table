# html-react-table
Simple html table using ReactJs

# Install
```npm install --save html-react-table```

# Usage
```import ReactHtmlTable from 'html-react-table';
   

   const columns = [{ key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }, { key: 'company', name: 'Company' }];
   const rows = [{ id: x, title: 'Title x', company: 'Company x' }, ...];


   const ReactTable = () => {
   return <ReactHtmlTable
    columns={columns}
    rows={rows}
    />);
```
}

