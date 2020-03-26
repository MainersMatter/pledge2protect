import os
import time
from flask import Flask

app = Flask(__name__)
is_prod = os.environ.get('FLASK_CONFIG', None) == 'HEROKU'
if is_prod:
    app.config.from_object('api.config.ProductionConfig')
else:
    app.config.from_object('api.config.DevelopmentConfig')


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


if __name__ == '__main__':
    app.run(threaded=True, port=5000)
