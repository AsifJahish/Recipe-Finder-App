from django.db import models
from users.models import User
from django.conf import settings  

from django.db import models
from users.models import User
from django.conf import settings  

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    ingredients = models.TextField()
    instructions = models.TextField()
    cooking_time = models.PositiveIntegerField()
    DIFFICULTY_CHOICES = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
    image_url = models.CharField(max_length=255, null=True, blank=True)  # Change to CharField for storing image URL

    def __str__(self):
        return self.title
