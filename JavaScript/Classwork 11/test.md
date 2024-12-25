```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
body {
    background-color: $primary-color;
    color: white;
}

button {
    background-color: $secondary-color;
    border: none;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: darken($secondary-color, 10%);
    }
}
```

```python
def hello_world():
    print("Hello, World!")
```