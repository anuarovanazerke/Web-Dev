from models import Vehicle,HoverCar,Submarine
def main():
    vehicle1=Vehicle("Porshe",120,50)
    hover1=HoverCar("SkyGlider",200,70,5)
    sub1=Submarine("DeepExplorer",40,100,500)

    vehicles=[vehicle1,hover1,sub1]
    for v in vehicles:
        print(v)
        print(v.move())
        print(v.refuel(10))
        if isinstance(v,HoverCar):
            print(v.hover())
        elif isinstance(v,Submarine):
            print(v.dive(300))
        print("-" *40)
if __name__=="__main__":
    main()