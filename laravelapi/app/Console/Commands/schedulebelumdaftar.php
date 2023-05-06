<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class schedulebelumdaftar extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'insert:schedulebelumdaftar';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

        

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $notif = new notif;
    
        $request->input('kode_bu')->value('001');
        $request->input('nama_bu')->value('jasa raharja');
        $request->input('message')->value('Segera ditindak lanjuti');
        $notif->save();
        return 0;
    }
}
