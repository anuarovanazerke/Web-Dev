class Vehicle:
    def __init__(self,name,speed,fuel):
        self.name=name
        self.speed=speed
        self.fuel=fuel
    def move(self):
        return f"{self.name} is moving at {self.speed} km/h"
    def refuel(self,amount):
        self.fuel+=amount
        return f"{self.name} refueled by {amount} literes.Total fuel:{self.fuel}L"
    def __str__(self):
        return f"{self.name} |Speed:{self.speed}km/h | Fuel:{self.fuel}L"
    
class HoverCar(Vehicle):
    def __init__(self,name,speed,fuel,hover_height):
        super().__init__(name,speed,fuel)
        self.hover_height=hover_height

    def hover(self):
            return f"{self.name} is hovering {self.hover_height} meteresabove the ground"
        
    def move(self):
            return f"{self.name} glides silently at {self.speed} km/h"
        

class Submarine(Vehicle):
    def __init__(self,name,speed,fuel,max_depth):
        super().__init__(name,speed,fuel)
        self.max_depth=max_depth
    
    def dive(self,depth):
        if depth>self.max_depth:
            return f"{self.name} cannot dive deeper that {self.max_depth} meters"
        return f"{self.name} dives to {depth} meters"
    
    def move(self):
        return f"{self.name} moves underwater at {self.speed} km/h"
