uint8_t LED1 = D3;
uint8_t LED2 = D4;
uint8_t LED3 = D5;
uint8_t LED4 = D6;

void setup(){
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  pinMode(LED4, OUTPUT);
}

void loop(){
  digitalWrite(LED1, HIGH);
  delay(2000)
  digitalWrite(LED1, LOW);
  delay(2000)

  digitalWrite(LED2, HIGH);
  delay(2000)
  digitalWrite(LED2, LOW);
  delay(2000)

  digitalWrite(LED3, HIGH);
  delay(2000)
  digitalWrite(LED3, LOW);
  delay(2000)

  digitalWrite(LED4, HIGH);
  delay(2000)
  digitalWrite(LED4, LOW);
  delay(2000)
}
