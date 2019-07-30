import React from 'react';
import { View, Modal } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  innerModalContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 15,
    borderRadius: 6,
    paddingVertical: 12,
  },
  overlayModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
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
    <View style={[styles.overlayModal, overlayColor, overlayStyle]}>
      <View style={[
        styles.modalContainer, width, height, borderRadius, backgroundColor, containerStyle,
      ]}
      >
        {children}
      </View>
    </View>
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
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onOverlayPressed: PropTypes.func,
};

Dialog.defaultProps = {
  containerStyle: {},
  overlayStyle: {},
  backgroundColor: '#FFFFFF',
  overlayColor: '#00000080',
  borderRadius: 10,
  width: '93%',
  height: '70%',
  onOverlayPressed: () => {},
};
