from django.db import models
from django.template.defaultfilters import slugify


class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)  
    image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    date_registration = models.DateTimeField(auto_now_add=True)

class NFT(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True) 
    description = models.TextField()
    image = models.ImageField(upload_to='nft_images/')
    creator = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='created_nfts')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_nfts')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_created = models.DateTimeField(auto_now_add=True)  
    category = models.CharField(max_length=50, blank=True)  

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Collection(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)  
    description = models.TextField()
    image = models.ImageField(upload_to='collection_images/', blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='collections') 

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class CollectionNFT(models.Model):
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE)
    nft = models.ForeignKey(NFT, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('collection', 'nft')

class Transaction(models.Model):
    nft = models.ForeignKey(NFT, on_delete=models.CASCADE)
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sold_nfts')
    buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='purchased_nfts')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    nft = models.ForeignKey(NFT, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

class Rating(models.Model):
    nft = models.ForeignKey(NFT, on_delete=models.CASCADE, related_name='ratings')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()

class Statistic(models.Model):
    nft = models.OneToOneField(NFT, on_delete=models.CASCADE) 
    views = models.PositiveIntegerField(default=0)
    likes = models.PositiveIntegerField(default=0)