# React Native Dialog
Component of modified modal, add overlay before the actual content


## Usage

```jsx
    <Dialog
        containerStyle={styles.container}
        overlayStyle={styles.overlay}
        backgroundColor={styles.overlay}
        overlayColor="white"
        borderRadius={3}
        width={50}
        height={150}
        onOverlayPressed={() =>{}}
        ...modalProps
    >
        {children}
    </Dialog>
```

## Properties

 Name           | Description                                 | Type     | Required  | Default value   
:---------------|:------------------------------------------- |:---------|:---------:|:--------------
 caption        | Caption of the component                    | string   | yes       |           
 disabled       | Make the component disabled                 | boolean  |           | false          
 onPress        | Callback when the component is pressed      | function | yes       |           
 bold           | Make the text bold                          | boolean  |           | false          
 italic         | Make the text italic                        | boolean  |           | false          
 color          | The color of the component                  | string   |           | `#2f2f2f`          
 disabledColor  | The color when the component is disabled    | string   |           | `#8C8C8C`        


```


```


## Note:
After cloning this repo, don't forget to edit these files:

1. Edit these fields inside `package.json` file
   - name
   - description
   - url for `repository`, `bugs`, and `homepage`
   - author

2. Edit component name inside `index.js` file.
3. Edit component name inside `src/custom-component.js` file.
4. Rename `src/custom-component.js` file appropriately.
