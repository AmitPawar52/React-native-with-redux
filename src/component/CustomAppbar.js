import React from "react";
import { Appbar, Menu } from "react-native-paper";


function CustomAppbar({ navigation, back }) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
  
    return (
      <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="BMS" />
        {!back ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="menu" color="black" onPress={openMenu} />
            }>
            <Menu.Item title="Customers" />
            <Menu.Item title="Vendors" />
            <Menu.Item title="Reports" />
          </Menu>
        ) : null}
      </Appbar.Header>
    );
  }

  export default CustomAppbar;