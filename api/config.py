class Config(object):
    DEBUG = False
    DATABASE_URI = 'sqlite:///:memory:'


class DevelopmentConfig(Config):
    ENV = 'development'
    DEBUG = True


# class HerokuConfig(ProductionConfig):
#     @classmethod
#     def init_app(cls, app):
#         ProductionConfig.init_app(app)
#
#     import logging
#     from logging import StreamHandler
#     file_handler = StreamHandler()
#     file_handler.setLevel(logging.WARNING)
#     app.logger.addHandler(file_handler)


class ProductionConfig(Config):
    ENV = 'production'
    DATABASE_URI = 'mysql://user@localhost/foo'
