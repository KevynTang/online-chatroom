import qrcode from 'qrcode-generator'

const useQRCode = (data: string): string => {

  const typeNumber = 4;
  const errorCorrectionLevel = 'L';
  const qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(data);
  qr.make();

  return qr.createSvgTag(6, 4)

}

export default useQRCode