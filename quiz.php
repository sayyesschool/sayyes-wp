<?php
require 'utils.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$recipient = isset($data['recipient']) ? $data['recipient'] : 'info@sayes.ru';
$level = $data['level'];
$questions = $data['questions'];

$message = wordwrap(getHtml($name, $email, $level, $questions), 70);
$admin_message = wordwrap(getHtml($name, $email, $level, $questions, true), 70);

send_email($email, 'Результаты теста', $message);
send_email($recipient, 'Результаты теста', $admin_message);
send_email('85ed1f6c.sayes.ru@apac.teams.ms', 'Результаты теста', $admin_message);

send_json([ 'ok' => true ]);

function getHtml($name, $email, $level, $questions, $is_admin = false) {
    $output = '<html><body style="font-family: sans-serif">';
    $output .= '<h1>Результаты теста</h1>';

    if ($is_admin) {
        $output .= '<div><b>Имя:</b> ' . $name . '</div>';
        $output .= '<div><b>Email: ' . $email . '</b></div>';
        $output .= '<div><b>Приблизительный уровень:</b> <i>' . $level . '</i></div>';
    } else {
        $output .= '<p><b>Ваш приблизительный уровень:</b> <i>' . $level . '</i></p>';
        $output .= '<p>Результаты теста и ваш уровень знаний определяются приблизительно! Чтобы получить точную оценку, необходимо также пройти устную часть тестирования.</p><hr>';
    }
  
    $output .= '<h2>Ответы</h2>';

    foreach ($questions as $index => $question) {
        $output .= '<div>' . $index + 1;
        $output .= '<div>' . $question['text'] . '</div>';
        $output .= '<div><b>Тема:</b> <i>' . $question['topic'] . '</i></div>';
        $output .= '<div><b>Правильный ответ:</b> ' . $question['answer'] . '</div>';
        $output .= '<div><b>Ваш ответ:</b> <span style="color: ' . getAnswerColor($question['answer'], $question['userAnswer']) . '">' . $question['userAnswer'] . '</span></div>';
        $output .= '</div><hr>';
    }

    $output .= 'Хотите перейти на уровень выше за 3 месяца обучения по методике "Английский до автоматизма"? <b><a href="https://free.sayes.ru">Оставьте заявку на тестирование и пробный урок</a></b> в группе вашего уровня и испытайте наш метод обучения на себе!';
    
    $output .= '<p>Have a nice day!</p><p>SAY YES! English School</p></body></html>';

    return $output;
}

function getAnswerColor($answer, $userAnswer) {
    if ($answer == $userAnswer) {
        return 'forestgreen';
    } else {
        return 'firebrick';
    }
}