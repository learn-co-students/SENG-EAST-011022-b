# Intro to Serializers

#### installing the serializer gem
- gem active_model_serializers
- gem active_model_serializers, "~> 0.10.12"


#### Creating nested serializer deeper then 1 level
- create a file (ams.rb) inside config/initializers and add the following line
```
   ActiveModelSerializers.config.default_includes = '**'
```

#### Specifying what Serializer to use (when useing custome serializers)
```
   render json: user, serializer: ItemReviewsActivitySerializer, status: :ok
```

#### Our Domain Relationship
User -< WinterItem -< Reviews 


UsersController 

##### index method should return 
```
   {
      id: 1
      name: "users Name"
      city: "City name"   
   }
```

##### show method should return 
```
   {
      id: 1
      name: "users Name"
      city: "City name" 
      winter_items: [
         {id: 1, name: "item_name", price: "item price"}
         {id: 2, name: "item_name", price: "item price"}
         {id: 3, name: "item_name", price: "item price"}
      ]  
   }
```

## Bonus
##### show should return 
```
   {
      id: 1
      name: "users Name"
      city: "City name" 
      winter_items: [
         {
            id: 1, 
            name: "item_name", 
            price: "item price"
            review: [
               {id: 3, content: "some content}
               {id: 11, content: "some content}
            ]
         }
         {
            id: 2, 
            name: "item_name", 
            price: "item price"
            review: [
               {id: 10, content: "some content}
               {id: 55, content: "some content}
            ]
         }
      ]  
   }
```