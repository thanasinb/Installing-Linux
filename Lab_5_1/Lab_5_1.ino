#include <SPI.h>
#include "MFRC522.h"
#define RST_PIN  D1
#define SS_PIN  D2
MFRC522 mfrc522(SS_PIN, RST_PIN);
String rfid_in = "";
void setup() {
  Serial.begin(115200);
  SPI.begin();
  mfrc522.PCD_Init();
  Serial.println("");
}
void loop() {
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
    rfid_in=rfid_read();
    Serial.println("Card found");
    Serial.println("HEX: " + rfid_in);
    delay(1000);
  }
  delay(1);
}
String rfid_read() {
  String content = "";
  for (byte i = 0; i < mfrc522.uid.size; i++)
  {
    content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
    content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  content.toUpperCase();
  return content.substring(1);
}
