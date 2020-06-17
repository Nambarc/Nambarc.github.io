# Make my other modules available.
import sys
sys.path.insert(0, 'B:/Users/Chris/ChrisDocs/Projects/Programming/Local/Python/png reader')

# Imports for this script.
import os
import pypng

intended_width = int(input("What width are you aiming for?\n"))

dir = "card_images/"

image_names = os.listdir(dir)

heights = []
widths = []

for item in image_names:
  file_path = dir + item
  image = pypng.png(file_path)

  heights.append(image.IHDR["Width"])
  widths.append(image.IHDR["Height"])

  #print("Height: " + str(image.IHDR["Width"]))
  #print("Width: " + str(image.IHDR["Height"]))

avg_height = int(sum(heights)/len(heights))
avg_width = int(sum(widths)/len(widths))

# For a width of 700, what height do we need?
height = int((avg_width/avg_height) * intended_width)
print("For a widht of {}px, recommend a height of {}px".format(intended_width, height))
