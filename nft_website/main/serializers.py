from rest_framework import serializers
from .models import NFT, CollectionNFT, Collection, User, Transaction, Rating, Comment, Statistic

class UserSerializer(serializers.ModelSerializer):
    owned_nfts = serializers.PrimaryKeyRelatedField(many=True, queryset=NFT.objects.all())
    created_nfts = serializers.PrimaryKeyRelatedField(many=True, queryset=NFT.objects.all())
    collections = serializers.PrimaryKeyRelatedField(many=True, queryset=Collection.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'image', 'date_registration', 'owned_nfts', 'created_nfts', 'collections']

class NFTSerializer(serializers.ModelSerializer):
    creator = UserSerializer(read_only=True)
    owner = UserSerializer(read_only=True)
    comments = serializers.PrimaryKeyRelatedField(many=True, queryset=Comment.objects.all())
    ratings = serializers.PrimaryKeyRelatedField(many=True, queryset=Rating.objects.all())
    statistic = serializers.PrimaryKeyRelatedField(queryset=Statistic.objects.all())

    class Meta:
        model = NFT
        fields = "__all__"
        lookup_field = "slug"
        extra_kwargs = {
            "url": {"lookup_field": "slug"}
        }

class CollectionSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    nfts = serializers.SerializerMethodField()

    def get_nfts(self, obj):
        nfts = CollectionNFT.objects.filter(collection=obj).values_list("nft", flat=True)
        return NFTSerializer(NFT.objects.filter(pk__in=nfts), many=True).data
    
class CollectionNFTSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollectionNFT
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    seller = UserSerializer(read_only=True)
    buyer = UserSerializer(read_only=True)

    class Meta:
        model = Transaction
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'

class RatingSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Rating
        fields = '__all__'

class StatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistic
        fields = '__all__'