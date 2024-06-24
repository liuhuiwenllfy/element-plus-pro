```vue

<ve-pagination
    :current="2"
    :page-size="10"
    :total="100"
    @handle-current-change="console.log($event)"
    @handle-size-change="console.log($event)"/>
```
