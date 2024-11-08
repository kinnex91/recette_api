import {Module} from '@nestjs/common';
import {RecipeService} from './recipe.service';
import {RecipeController} from './recipe.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Recipe} from "../entity/Recipe.entity";
import {JwtService} from '@nestjs/jwt';
import {Category} from "../entity/Category.entity";
import {Ingredient} from "../entity/Ingredient.entity";
import {IngredientService} from "../ingredient/Ingredient.service";
import {User} from "../entity/User.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Recipe, Category, Ingredient, User])], // Spécifie l'entité Recipe
  controllers: [RecipeController],
  providers: [RecipeService, JwtService, IngredientService],
})
export class RecipeModule {}
