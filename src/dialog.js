import React from 'react';
import {
  View, Modal, Dimensions, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const styles = {
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    borderRadius: 6,
    paddingVertical: 12,
  },
  overlayModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Dialog = ({
  children,
  containerStyle,
  overlayStyle,
  backgroundColor,
  overlayColor,
  onOverlayPressed,
  borderRadius,
  width,
  height,
  ...props
}) => (
  <Modal
    transparent
    animationType="fade"
    onRequestClose={onOverlayPressed}
    {...props}
  >
    <TouchableOpacity
      style={[styles.overlayModal, { backgroundColor: overlayColor }, overlayStyle]}
      onPress={onOverlayPressed}
    >
      <View style={[
        styles.modalContainer, {
          width, height, borderRadius, backgroundColor,
        }, containerStyle,
      ]}
      >
        {children}
      </View>
    </TouchableOpacity>
  </Modal>
);

export default Dialog;

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  containerStyle: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  overlayStyle: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  backgroundColor: PropTypes.string,
  overlayColor: PropTypes.string,
  borderRadius: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  onOverlayPressed: PropTypes.func,
};

Dialog.defaultProps = {
  containerStyle: {},
  overlayStyle: {},
  backgroundColor: '#FFFFFF',
  overlayColor: '#00000080',
  borderRadius: 10,
  width: widthDevice * 0.7,
  height: heightDevice * 0.6,
  onOverlayPressed: () => {},
};
