import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const subjects = [
    { name: 'Математика', level: '5-11 класс', price: '2000₽/час', color: 'bg-orange' },
    { name: 'Физика', level: '7-11 класс', price: '2200₽/час', color: 'bg-purple' },
    { name: 'Химия', level: '8-11 класс', price: '2100₽/час', color: 'bg-green' },
    { name: 'Биология', level: '6-11 класс', price: '1900₽/час', color: 'bg-blue-500' }
  ];

  const reviews = [
    { name: 'Анна Петрова', subject: 'Математика', rating: 5, text: 'Отличный преподаватель! Сдала ЕГЭ на 92 балла.' },
    { name: 'Михаил Иванов', subject: 'Физика', rating: 5, text: 'Очень понятно объясняет сложные темы. Рекомендую!' },
    { name: 'София Козлова', subject: 'Химия', rating: 5, text: 'Благодаря занятиям поступила в медицинский университет.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-purple-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="GraduationCap" className="h-8 w-8 text-orange" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange to-purple bg-clip-text text-transparent">
              EduMentor
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-orange transition-colors">Обо мне</a>
            <a href="#subjects" className="hover:text-orange transition-colors">Предметы</a>
            <a href="#schedule" className="hover:text-orange transition-colors">Расписание</a>
            <a href="#prices" className="hover:text-orange transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-orange transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-orange transition-colors">Контакты</a>
          </nav>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                <Icon name="User" className="h-4 w-4 mr-2" />
                Войти
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {isLoginMode ? 'Вход в личный кабинет' : 'Регистрация'}
                </DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="student" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="student">Ученик</TabsTrigger>
                  <TabsTrigger value="psychologist">Психолог</TabsTrigger>
                </TabsList>
                <TabsContent value="student" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full bg-orange hover:bg-orange-dark">
                    {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
                  </Button>
                  <p className="text-center text-sm">
                    {isLoginMode ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
                    <button 
                      onClick={() => setIsLoginMode(!isLoginMode)}
                      className="text-orange ml-1 hover:underline"
                    >
                      {isLoginMode ? 'Регистрация' : 'Войти'}
                    </button>
                  </p>
                </TabsContent>
                <TabsContent value="psychologist" className="space-y-4">
                  <div className="text-center py-8">
                    <Icon name="UserCheck" className="h-12 w-12 mx-auto text-purple mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Панель психолога</h3>
                    <p className="text-muted-foreground mb-4">Доступ к расширенным инструментам анализа</p>
                    <Button className="bg-purple hover:bg-purple-dark">
                      Войти как психолог
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange via-purple to-green bg-clip-text text-transparent">
            Качественная подготовка к ЕГЭ и ОГЭ
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Индивидуальный подход, современные методики и гарантированный результат. 
            Более 200 учеников поступили в лучшие вузы страны.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange to-orange-dark text-white px-8 py-3">
              <Icon name="Calendar" className="h-5 w-5 mr-2" />
              Записаться на занятие
            </Button>
            <Button size="lg" variant="outline" className="border-purple text-purple hover:bg-purple hover:text-white px-8 py-3">
              <Icon name="Play" className="h-5 w-5 mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Обо мне</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Меня зовут Мария Александровна. Я преподаватель с 12-летним стажем, 
                  кандидат педагогических наук, эксперт ЕГЭ по математике и физике.
                </p>
                <p>
                  За годы работы я разработала авторскую методику подготовки, 
                  которая позволяет ученикам не только сдать экзамены на высокие баллы, 
                  но и полюбить точные науки.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-orange-light text-orange-dark">12 лет опыта</Badge>
                  <Badge className="bg-purple-light text-purple-dark">Эксперт ЕГЭ</Badge>
                  <Badge className="bg-green-light text-green-dark">200+ учеников</Badge>
                  <Badge className="bg-blue-100 text-blue-700">Средний балл 85+</Badge>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="img/70ae57f5-0e48-4a97-afbd-f2c0b6cc9302.jpg" 
                alt="Преподаватель" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange to-purple p-6 rounded-2xl text-white">
                <div className="text-2xl font-bold">92</div>
                <div className="text-sm">средний балл ЕГЭ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-16 px-4 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Предметы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject) => (
              <Card key={subject.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center mb-3`}>
                    <Icon name="BookOpen" className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{subject.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{subject.level}</p>
                  <p className="text-2xl font-bold text-orange">{subject.price}</p>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Booking Section */}
      <section id="schedule" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Запись на занятие</h3>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" className="h-6 w-6 mr-2 text-orange" />
                  Выберите дату и время
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-base font-medium mb-4 block">Выберите дату:</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium mb-3 block">Доступное время:</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className={selectedTime === time ? "bg-orange hover:bg-orange-dark" : ""}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="subject">Предмет</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите предмет" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="math">Математика</SelectItem>
                            <SelectItem value="physics">Физика</SelectItem>
                            <SelectItem value="chemistry">Химия</SelectItem>
                            <SelectItem value="biology">Биология</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="format">Формат занятия</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите формат" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online">Онлайн</SelectItem>
                            <SelectItem value="offline">Офлайн</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="message">Комментарий (необязательно)</Label>
                        <Textarea id="message" placeholder="Укажите уровень подготовки, цели..." />
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-orange to-orange-dark hover:from-orange-dark hover:to-orange"
                      disabled={!selectedDate || !selectedTime}
                    >
                      <Icon name="Check" className="h-4 w-4 mr-2" />
                      Записаться на занятие
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 px-4 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Цены</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Разовое занятие</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange mb-4">2000₽</div>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ 60 минут</li>
                  <li>✓ Индивидуальный подход</li>
                  <li>✓ Материалы включены</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            <Card className="border-orange border-2">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Пакет "Месяц"</CardTitle>
                  <Badge className="bg-orange text-white">Популярно</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange mb-4">7000₽</div>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ 4 занятия по 60 минут</li>
                  <li>✓ Скидка 12%</li>
                  <li>✓ Материалы + тесты</li>
                  <li>✓ Домашние задания</li>
                </ul>
                <Button className="w-full mt-6 bg-orange hover:bg-orange-dark">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Интенсив "3 месяца"</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange mb-4">18000₽</div>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ 12 занятий по 60 минут</li>
                  <li>✓ Скидка 25%</li>
                  <li>✓ Полный курс подготовки</li>
                  <li>✓ Пробные экзамены</li>
                  <li>✓ Поддержка 24/7</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Отзывы учеников</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.subject}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Dashboard Preview */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Личный кабинет ученика</h3>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="User" className="h-6 w-6 mr-2 text-blue-500" />
                  Панель управления
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="schedule" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="schedule">Расписание</TabsTrigger>
                    <TabsTrigger value="progress">Прогресс</TabsTrigger>
                    <TabsTrigger value="homework">Д/З</TabsTrigger>
                    <TabsTrigger value="materials">Материалы</TabsTrigger>
                  </TabsList>
                  <TabsContent value="schedule" className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">Математика</p>
                          <p className="text-sm text-gray-500">Завтра, 15:00-16:00</p>
                        </div>
                        <Badge className="bg-green-light text-green-dark">Подтверждено</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">Физика</p>
                          <p className="text-sm text-gray-500">Пт, 16:00-17:00</p>
                        </div>
                        <Badge className="bg-orange-light text-orange-dark">Ожидает</Badge>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="progress" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Математика</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Физика</span>
                          <span>72%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple h-2 rounded-full" style={{width: '72%'}}></div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="homework">
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Алгебра: Логарифмы</h4>
                        <p className="text-sm text-gray-600 mb-2">Срок: до 25 августа</p>
                        <Button size="sm">Отправить решение</Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="materials">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon name="FileText" className="h-5 w-5 text-orange" />
                          <span>Конспект: Производные</span>
                        </div>
                        <Button size="sm" variant="outline">Скачать</Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Контакты</h3>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" className="h-5 w-5 text-orange" />
              <span className="text-lg">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" className="h-5 w-5 text-orange" />
              <span className="text-lg">maria@edututor.ru</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="MapPin" className="h-5 w-5 text-orange" />
              <span className="text-lg">Москва, ул. Образцова, д. 10</span>
            </div>
            <div className="flex justify-center space-x-4 pt-6">
              <Button variant="outline" size="icon">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Send" className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center">
                <Icon name="GraduationCap" className="h-6 w-6 mr-2 text-orange" />
                EduMentor
              </h4>
              <p className="text-gray-400">
                Качественная подготовка к экзаменам с индивидуальным подходом к каждому ученику.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Предметы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Математика</li>
                <li>Физика</li>
                <li>Химия</li>
                <li>Биология</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Подготовка к ЕГЭ</li>
                <li>Подготовка к ОГЭ</li>
                <li>Школьная программа</li>
                <li>Консультации психолога</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>maria@edututor.ru</li>
                <li>Москва, ул. Образцова, 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduMentor. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;