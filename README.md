# React Native Dialog
Component of modified modal, add overlay before the actual content


## Usage

```jsx
    <Dialog
        containerStyle={styles.container}
        overlayStyle={styles.overlay}
        backgroundColor="blue"
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

 Name           | Description                                 | Type                | Required | Default value   
:---------------|:------------------------------------------- |:--------------------|:--------:|:--------------
 All Props from Modal component | Set the modal               | ...                 | Yes      | Default modal props   
 containerStyle | Style the dialog box                        | View style(Object)  | No       | Internal Style      
 overlayStyle   | Style the overlay box (behind dialog box)   | View style(Object)  | No       | Internal Style          
 backgroundColor| Color of the dialog box                     | String              | No       | `#FFFFFF`       
 overlayColor   | Color of the overlay box                    | String              | No       | `#00000080`       
 borderRadius   | Border radius of the dialog box             | Number              | No       | 10          
 width          | Width of the dialog box                     | Number              | No       | 70% of device's width          
 height         | Height of the dialog box                    | Number              | No       | 60% of device's height          
 onOverlayPress | The function of when the overlay box pressed| Function            | No       | None   


```


```


## Note:
Please set the visibility of the dialog and the function to show it first, the same as the usual Modal component.
