#include <IRremote.h>
 
int recieve_pin = 3;
int output1 = 2;
int output2 = 3;
int outputON[] = {0,0, 0};
#define code1  65535
#define code2 655536
 
IRrecv ir_receiver(recieve_pin);
 
decode_results results;
 
void setup()
{
  Serial.begin(9600);   
  ir_receiver.enableIRIn(); 
  pinMode(output1, OUTPUT);
}
 
void loop() {
  if (ir_receiver.decode(&results)) {
    unsigned int value = results.value;
    switch(value) {
       case code1:
         if(outputON[1] == 1) {           // if first led is on then
            digitalWrite(output1, LOW);   // turn it off when button is pressed
            outputON[1] = 0;              // and set its state as off
         } else {                         // else if first led is off
             digitalWrite(output1, HIGH); // turn it on when the button is pressed
             outputON[1] = 1;             // and set its state as on
         }
          break;    
    }

    switch(value) {
       case code2:
         if(outputON[1] == 1) {        
            digitalWrite(output1, LOW);
            outputON[1] = 0;           
         } else {                   
             digitalWrite(output1, HIGH); 
             outputON[1] = 1; 
         }
          break;    
    }
    ir_receiver.resume(); // Receive the next value
  }
}
