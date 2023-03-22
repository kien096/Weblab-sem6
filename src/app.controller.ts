import { Controller, Get, Post, Render, Param, Req, Res, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { TransformInterceptor } from './transform.interceptor';
import * as jsonfile from 'jsonfile';

@Controller()
export class AppController {

  @Get('index')
  @UseInterceptors(TransformInterceptor)
  @Render('..\\views\\content\\index')
  getIndex() {
    return { title: 'Rise of Kingdom'};
  }

  @Get('passport')
  @UseInterceptors(TransformInterceptor)
  @Render('..\\views\\content\\passport')
  getPassport() {
    return { title: 'Passport'};
  }

  @Get('mission')
  @UseInterceptors(TransformInterceptor)
  @Render('..\\views\\content\\mission')
  getMission() {
    return { title: 'Mission'};
  }

  @Get('champion')
  @UseInterceptors(TransformInterceptor)
  @Render('..\\views\\content\\champion')
  getChampion() {
    return { title: 'Champion'};
  }

  @Get()
  @Render('index')
  root() {
    const data = jsonfile.readFileSync('db.json');
    return { items: data.items };
  }

  @Get('login')
  @UseInterceptors(TransformInterceptor)
  @Render('..\\views\\login\\login')
  getLogin() {
    return { title: 'Login'};
  }
  
}
